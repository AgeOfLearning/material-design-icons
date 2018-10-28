import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpRemoveCircleElement
 * @class IconSharpRemoveCircleElement
 * @extends {AoflElement}
 */
class IconSharpRemoveCircleElement extends AoflElement {
  /**
   * Creates an instance of IconSharpRemoveCircleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-remove-circle';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpRemoveCircleElement.is, IconSharpRemoveCircleElement);

export default IconSharpRemoveCircleElement;
