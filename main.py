from flask import Flask, render_template, request, url_for
from flask_bootstrap import Bootstrap5
from showmaker_demo import ShowMaker


app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret-key-goes-here'
# app.config['SECRET_KEY'] = os.environ.get("APP_SECRET_KEY")
Bootstrap5(app)


@app.route('/', methods=['GET','POST'])
def home():
    return f"<a href={url_for('demo')}>play<a/>"

@app.route('/demo', methods=['GET','POST'])
def demo():
    if request.method == "POST":
        enter = request.form.get('user_input')
        dk_showmaker.player_input(user_input=enter) # type: ignore
    result = dk_showmaker.output
    pwd = dk_showmaker.pwd
    history = dk_showmaker.history
    is_winner = str(dk_showmaker._iswinner)
    player = int(dk_showmaker._current_player) + 1
    return render_template(
        'demo.html',
        terminal_lines=result,
        pwd=pwd,
        history=history,
        is_winner=is_winner,
        player=player
        )

@app.route('/input-recieve')
def input_receive():
    result = dk_showmaker.output
    pwd = dk_showmaker.pwd
    history = dk_showmaker.history
    is_winner = str(dk_showmaker._iswinner)
    player = int(dk_showmaker._current_player) + 1
    return render_template(
        'cz_terminal.html',
        terminal_lines=result,
        pwd=pwd, history=history,
        is_winner=is_winner,
        player=player
        ) # cz stands for customized

if __name__ == "__main__":
    dk_showmaker = ShowMaker()
    dk_showmaker.new_game()
    app.run(debug=True, port=5000)
    