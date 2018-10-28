import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineViewHeadlineElement
 * @class IconBaselineViewHeadlineElement
 * @extends {AoflElement}
 */
class IconBaselineViewHeadlineElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineViewHeadlineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-view-headline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineViewHeadlineElement.is, IconBaselineViewHeadlineElement);

export default IconBaselineViewHeadlineElement;
