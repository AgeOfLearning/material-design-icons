import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineLocalMallElement
 * @class IconBaselineLocalMallElement
 * @extends {AoflElement}
 */
class IconBaselineLocalMallElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineLocalMallElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-local-mall';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineLocalMallElement.is, IconBaselineLocalMallElement);

export default IconBaselineLocalMallElement;
