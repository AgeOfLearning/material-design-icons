import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneDockElement
 * @class IconTwotoneDockElement
 * @extends {AoflElement}
 */
class IconTwotoneDockElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneDockElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-dock';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneDockElement.is, IconTwotoneDockElement);

export default IconTwotoneDockElement;
