import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineTodayElement
 * @class IconBaselineTodayElement
 * @extends {AoflElement}
 */
class IconBaselineTodayElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineTodayElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-today';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineTodayElement.is, IconBaselineTodayElement);

export default IconBaselineTodayElement;
