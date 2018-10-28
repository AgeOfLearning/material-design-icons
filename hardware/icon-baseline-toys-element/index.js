import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineToysElement
 * @class IconBaselineToysElement
 * @extends {AoflElement}
 */
class IconBaselineToysElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineToysElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-toys';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineToysElement.is, IconBaselineToysElement);

export default IconBaselineToysElement;
