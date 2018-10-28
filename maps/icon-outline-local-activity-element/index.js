import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineLocalActivityElement
 * @class IconOutlineLocalActivityElement
 * @extends {AoflElement}
 */
class IconOutlineLocalActivityElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineLocalActivityElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-local-activity';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineLocalActivityElement.is, IconOutlineLocalActivityElement);

export default IconOutlineLocalActivityElement;
