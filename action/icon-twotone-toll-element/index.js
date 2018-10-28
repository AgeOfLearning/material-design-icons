import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneTollElement
 * @class IconTwotoneTollElement
 * @extends {AoflElement}
 */
class IconTwotoneTollElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneTollElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-toll';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneTollElement.is, IconTwotoneTollElement);

export default IconTwotoneTollElement;
