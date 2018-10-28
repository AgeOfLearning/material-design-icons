import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineTurnedInElement
 * @class IconOutlineTurnedInElement
 * @extends {AoflElement}
 */
class IconOutlineTurnedInElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineTurnedInElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-turned-in';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineTurnedInElement.is, IconOutlineTurnedInElement);

export default IconOutlineTurnedInElement;
