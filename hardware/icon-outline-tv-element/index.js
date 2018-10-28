import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineTvElement
 * @class IconOutlineTvElement
 * @extends {AoflElement}
 */
class IconOutlineTvElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineTvElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-tv';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineTvElement.is, IconOutlineTvElement);

export default IconOutlineTvElement;
