import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSubwayElement
 * @class IconBaselineSubwayElement
 * @extends {AoflElement}
 */
class IconBaselineSubwayElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSubwayElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-subway';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSubwayElement.is, IconBaselineSubwayElement);

export default IconBaselineSubwayElement;
