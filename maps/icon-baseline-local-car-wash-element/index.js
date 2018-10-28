import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineLocalCarWashElement
 * @class IconBaselineLocalCarWashElement
 * @extends {AoflElement}
 */
class IconBaselineLocalCarWashElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineLocalCarWashElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-local-car-wash';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineLocalCarWashElement.is, IconBaselineLocalCarWashElement);

export default IconBaselineLocalCarWashElement;
