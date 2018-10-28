import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePlaceElement
 * @class IconTwotonePlaceElement
 * @extends {AoflElement}
 */
class IconTwotonePlaceElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePlaceElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-place';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePlaceElement.is, IconTwotonePlaceElement);

export default IconTwotonePlaceElement;
