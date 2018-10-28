import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpForward5Element
 * @class IconSharpForward5Element
 * @extends {AoflElement}
 */
class IconSharpForward5Element extends AoflElement {
  /**
   * Creates an instance of IconSharpForward5Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-forward-5';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpForward5Element.is, IconSharpForward5Element);

export default IconSharpForward5Element;
