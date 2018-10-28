import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePlusOneElement
 * @class IconOutlinePlusOneElement
 * @extends {AoflElement}
 */
class IconOutlinePlusOneElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePlusOneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-plus-one';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePlusOneElement.is, IconOutlinePlusOneElement);

export default IconOutlinePlusOneElement;
