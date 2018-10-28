import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePersonalVideoElement
 * @class IconBaselinePersonalVideoElement
 * @extends {AoflElement}
 */
class IconBaselinePersonalVideoElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePersonalVideoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-personal-video';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePersonalVideoElement.is, IconBaselinePersonalVideoElement);

export default IconBaselinePersonalVideoElement;
