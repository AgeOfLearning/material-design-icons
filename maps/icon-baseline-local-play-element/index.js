import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineLocalPlayElement
 * @class IconBaselineLocalPlayElement
 * @extends {AoflElement}
 */
class IconBaselineLocalPlayElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineLocalPlayElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-local-play';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineLocalPlayElement.is, IconBaselineLocalPlayElement);

export default IconBaselineLocalPlayElement;
