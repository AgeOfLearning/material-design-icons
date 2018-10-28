import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpCallSplitElement
 * @class IconSharpCallSplitElement
 * @extends {AoflElement}
 */
class IconSharpCallSplitElement extends AoflElement {
  /**
   * Creates an instance of IconSharpCallSplitElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-call-split';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpCallSplitElement.is, IconSharpCallSplitElement);

export default IconSharpCallSplitElement;
