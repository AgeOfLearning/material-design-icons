import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineTimelineElement
 * @class IconBaselineTimelineElement
 * @extends {AoflElement}
 */
class IconBaselineTimelineElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineTimelineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-timeline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineTimelineElement.is, IconBaselineTimelineElement);

export default IconBaselineTimelineElement;
