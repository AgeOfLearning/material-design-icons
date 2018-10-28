import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpAdjustElement
 * @class IconSharpAdjustElement
 * @extends {AoflElement}
 */
class IconSharpAdjustElement extends AoflElement {
  /**
   * Creates an instance of IconSharpAdjustElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-adjust';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpAdjustElement.is, IconSharpAdjustElement);

export default IconSharpAdjustElement;
