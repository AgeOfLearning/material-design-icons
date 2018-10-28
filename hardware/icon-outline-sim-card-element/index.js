import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSimCardElement
 * @class IconOutlineSimCardElement
 * @extends {AoflElement}
 */
class IconOutlineSimCardElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSimCardElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-sim-card';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSimCardElement.is, IconOutlineSimCardElement);

export default IconOutlineSimCardElement;
