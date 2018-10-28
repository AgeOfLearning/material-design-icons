import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineTurnedInNotElement
 * @class IconOutlineTurnedInNotElement
 * @extends {AoflElement}
 */
class IconOutlineTurnedInNotElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineTurnedInNotElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-turned-in-not';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineTurnedInNotElement.is, IconOutlineTurnedInNotElement);

export default IconOutlineTurnedInNotElement;
