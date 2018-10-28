import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineTvOffElement
 * @class IconOutlineTvOffElement
 * @extends {AoflElement}
 */
class IconOutlineTvOffElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineTvOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-tv-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineTvOffElement.is, IconOutlineTvOffElement);

export default IconOutlineTvOffElement;
