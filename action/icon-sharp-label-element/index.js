import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpLabelElement
 * @class IconSharpLabelElement
 * @extends {AoflElement}
 */
class IconSharpLabelElement extends AoflElement {
  /**
   * Creates an instance of IconSharpLabelElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-label';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpLabelElement.is, IconSharpLabelElement);

export default IconSharpLabelElement;
