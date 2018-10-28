import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineTvElement
 * @class IconBaselineTvElement
 * @extends {AoflElement}
 */
class IconBaselineTvElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineTvElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-tv';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineTvElement.is, IconBaselineTvElement);

export default IconBaselineTvElement;
