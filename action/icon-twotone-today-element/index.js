import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneTodayElement
 * @class IconTwotoneTodayElement
 * @extends {AoflElement}
 */
class IconTwotoneTodayElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneTodayElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-today';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneTodayElement.is, IconTwotoneTodayElement);

export default IconTwotoneTodayElement;
