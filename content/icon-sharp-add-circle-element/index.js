import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpAddCircleElement
 * @class IconSharpAddCircleElement
 * @extends {AoflElement}
 */
class IconSharpAddCircleElement extends AoflElement {
  /**
   * Creates an instance of IconSharpAddCircleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-add-circle';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpAddCircleElement.is, IconSharpAddCircleElement);

export default IconSharpAddCircleElement;
