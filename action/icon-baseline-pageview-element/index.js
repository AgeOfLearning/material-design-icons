import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePageviewElement
 * @class IconBaselinePageviewElement
 * @extends {AoflElement}
 */
class IconBaselinePageviewElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePageviewElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-pageview';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePageviewElement.is, IconBaselinePageviewElement);

export default IconBaselinePageviewElement;
