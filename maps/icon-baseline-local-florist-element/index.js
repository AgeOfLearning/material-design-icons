import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineLocalFloristElement
 * @class IconBaselineLocalFloristElement
 * @extends {AoflElement}
 */
class IconBaselineLocalFloristElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineLocalFloristElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-local-florist';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineLocalFloristElement.is, IconBaselineLocalFloristElement);

export default IconBaselineLocalFloristElement;
