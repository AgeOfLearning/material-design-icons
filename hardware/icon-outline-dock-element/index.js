import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineDockElement
 * @class IconOutlineDockElement
 * @extends {AoflElement}
 */
class IconOutlineDockElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineDockElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-dock';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineDockElement.is, IconOutlineDockElement);

export default IconOutlineDockElement;
