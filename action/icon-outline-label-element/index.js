import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineLabelElement
 * @class IconOutlineLabelElement
 * @extends {AoflElement}
 */
class IconOutlineLabelElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineLabelElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-label';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineLabelElement.is, IconOutlineLabelElement);

export default IconOutlineLabelElement;
