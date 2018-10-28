import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineShareElement
 * @class IconBaselineShareElement
 * @extends {AoflElement}
 */
class IconBaselineShareElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineShareElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-share';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineShareElement.is, IconBaselineShareElement);

export default IconBaselineShareElement;
