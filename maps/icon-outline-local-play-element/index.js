import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineLocalPlayElement
 * @class IconOutlineLocalPlayElement
 * @extends {AoflElement}
 */
class IconOutlineLocalPlayElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineLocalPlayElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-local-play';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineLocalPlayElement.is, IconOutlineLocalPlayElement);

export default IconOutlineLocalPlayElement;
