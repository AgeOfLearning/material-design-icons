import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineDirectionsBusElement
 * @class IconOutlineDirectionsBusElement
 * @extends {AoflElement}
 */
class IconOutlineDirectionsBusElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineDirectionsBusElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-directions-bus';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineDirectionsBusElement.is, IconOutlineDirectionsBusElement);

export default IconOutlineDirectionsBusElement;
