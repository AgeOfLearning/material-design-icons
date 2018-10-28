import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineBeachAccessElement
 * @class IconOutlineBeachAccessElement
 * @extends {AoflElement}
 */
class IconOutlineBeachAccessElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineBeachAccessElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-beach-access';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineBeachAccessElement.is, IconOutlineBeachAccessElement);

export default IconOutlineBeachAccessElement;
