import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundTodayElement
 * @class IconRoundTodayElement
 * @extends {AoflElement}
 */
class IconRoundTodayElement extends AoflElement {
  /**
   * Creates an instance of IconRoundTodayElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-today';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundTodayElement.is, IconRoundTodayElement);

export default IconRoundTodayElement;
