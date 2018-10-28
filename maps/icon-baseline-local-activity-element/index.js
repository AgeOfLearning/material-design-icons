import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineLocalActivityElement
 * @class IconBaselineLocalActivityElement
 * @extends {AoflElement}
 */
class IconBaselineLocalActivityElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineLocalActivityElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-local-activity';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineLocalActivityElement.is, IconBaselineLocalActivityElement);

export default IconBaselineLocalActivityElement;
