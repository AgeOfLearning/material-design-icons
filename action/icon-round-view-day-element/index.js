import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundViewDayElement
 * @class IconRoundViewDayElement
 * @extends {AoflElement}
 */
class IconRoundViewDayElement extends AoflElement {
  /**
   * Creates an instance of IconRoundViewDayElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-view-day';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundViewDayElement.is, IconRoundViewDayElement);

export default IconRoundViewDayElement;
