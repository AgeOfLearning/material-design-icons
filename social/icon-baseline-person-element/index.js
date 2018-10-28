import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePersonElement
 * @class IconBaselinePersonElement
 * @extends {AoflElement}
 */
class IconBaselinePersonElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePersonElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-person';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePersonElement.is, IconBaselinePersonElement);

export default IconBaselinePersonElement;
