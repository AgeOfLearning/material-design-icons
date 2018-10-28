import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePlusOneElement
 * @class IconTwotonePlusOneElement
 * @extends {AoflElement}
 */
class IconTwotonePlusOneElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePlusOneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-plus-one';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePlusOneElement.is, IconTwotonePlusOneElement);

export default IconTwotonePlusOneElement;
