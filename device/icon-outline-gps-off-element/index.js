import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineGpsOffElement
 * @class IconOutlineGpsOffElement
 * @extends {AoflElement}
 */
class IconOutlineGpsOffElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineGpsOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-gps-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineGpsOffElement.is, IconOutlineGpsOffElement);

export default IconOutlineGpsOffElement;
