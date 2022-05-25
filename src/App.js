import './App.css'
import Key from './component/key.js'
import Specialkey from './component/specialkey.js'

function App() {
  return (
    <div className="App">
      <div className="keyboard-base">
        <Key text="~" />
        <Key text="1" />
        <Key text="2" />
        <Key text="3" />
        <Key text="4" />
        <Key text="5" />
        <Key text="6" />
        <Key text="7" />
        <Key text="8" />
        <Key text="9" />
        <Key text="0" />
        <Key text="-" />
        <Key text="+" />
        <Specialkey text="Back" class="key delete"  />
        <Specialkey text="Tab" class="key tab"  />
        <Key text="q" />
        <Key text="w" />
        <Key text="e" />
        <Key text="r" />
        <Key text="t" />
        <Key text="y" />
        <Key text="u" />
        <Key text="i" />
        <Key text="o" />
        <Key text="p" />
        <Key text="[" />
        <Key text="]" />
        <Specialkey text="\" class="key backslash"  />
        <Specialkey text="CapsLock" class="key capslock"  />
        <Key text="a" />
        <Key text="s" />
        <Key text="d" />
        <Key text="f" />
        <Key text="g" />
        <Key text="h" />
        <Key text="j" />
        <Key text="k" />
        <Key text="l" />
        <Key text=";" />
        <Key text="'" />
        <Specialkey text="Enter" class="key return"  />
        <Specialkey text="Shift" class="key leftshift"  />
        <Key text="z" />
        <Key text="x" />
        <Key text="c" />
        <Key text="v" />
        <Key text="b" />
        <Key text="n" />
        <Key text="m" />
        <Key text="," />
        <Key text="." />
        <Key text="/" />
        <Specialkey text="Shift" class="key rightshift"  />
        <Specialkey text="Ctrl" class="key leftctrl"  />
        <Specialkey text="win" class="key command"  />
        <Key text="Alt" />
        <Specialkey text="wSpace" class="key space"  />
        <Key text="Alt" />
        <Key text="[]" />
        <Key text="Ctrl" />
        <Specialkey text="Fn" class="key Fn"  />
    </div>
    </div>
  );
}

export default App;
