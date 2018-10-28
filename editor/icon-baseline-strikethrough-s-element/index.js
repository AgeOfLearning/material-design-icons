import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineStrikethroughSElement
 * @class IconBaselineStrikethroughSElement
 * @extends {AoflElement}
 */
class IconBaselineStrikethroughSElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineStrikethroughSElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-strikethrough-s';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineStrikethroughSElement.is, IconBaselineStrikethroughSElement);

export default IconBaselineStrikethroughSElement;
