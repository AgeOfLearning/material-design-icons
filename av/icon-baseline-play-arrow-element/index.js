import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePlayArrowElement
 * @class IconBaselinePlayArrowElement
 * @extends {AoflElement}
 */
class IconBaselinePlayArrowElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePlayArrowElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-play-arrow';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePlayArrowElement.is, IconBaselinePlayArrowElement);

export default IconBaselinePlayArrowElement;
