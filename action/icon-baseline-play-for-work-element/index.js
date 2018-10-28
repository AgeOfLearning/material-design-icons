import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePlayForWorkElement
 * @class IconBaselinePlayForWorkElement
 * @extends {AoflElement}
 */
class IconBaselinePlayForWorkElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePlayForWorkElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-play-for-work';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePlayForWorkElement.is, IconBaselinePlayForWorkElement);

export default IconBaselinePlayForWorkElement;
