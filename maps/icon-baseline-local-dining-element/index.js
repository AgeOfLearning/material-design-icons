import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineLocalDiningElement
 * @class IconBaselineLocalDiningElement
 * @extends {AoflElement}
 */
class IconBaselineLocalDiningElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineLocalDiningElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-local-dining';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineLocalDiningElement.is, IconBaselineLocalDiningElement);

export default IconBaselineLocalDiningElement;
