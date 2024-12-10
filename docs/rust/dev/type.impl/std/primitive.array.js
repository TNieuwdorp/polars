(function() {var type_impls = {
"polars":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-IntoParallelIterator-for-%5BT;+N%5D\" class=\"impl\"><a href=\"#impl-IntoParallelIterator-for-%5BT;+N%5D\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; IntoParallelIterator for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">[T; N]</a><span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Item\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Item\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Item</a> = T</h4></section></summary><div class='docblock'>The type of item that the parallel iterator will produce.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Iter\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Iter\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Iter</a> = IntoIter&lt;T, N&gt;</h4></section></summary><div class='docblock'>The parallel iterator type that will be created.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_par_iter\" class=\"method trait-impl\"><a href=\"#method.into_par_iter\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">into_par_iter</a>(self) -&gt; &lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">[T; N]</a> as IntoParallelIterator&gt;::Iter</h4></section></summary><div class='docblock'>Converts <code>self</code> into a parallel iterator. <a>Read more</a></div></details></div></details>","IntoParallelIterator","polars::datatypes::ChunkId"]],
"polars_core":[]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()