from flask import Flask, render_template, request

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret-key-goes-here'

@app.route('/', methods=['GET','POST'])
def test():
    msg = "test message with one space between\n two  space  between\n three   space   between."
    msg = msg.replace("   ", "  &nbsp;")
    msg = msg.replace("  ", " &nbsp;")
    
    return render_template('index.html', msg=msg)

if __name__ == "__main__":
    app.run(debug=True, port=5000)