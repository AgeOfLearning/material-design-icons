import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineLandscapeElement
 * @class IconBaselineLandscapeElement
 * @extends {AoflElement}
 */
class IconBaselineLandscapeElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineLandscapeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-landscape';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineLandscapeElement.is, IconBaselineLandscapeElement);

export default IconBaselineLandscapeElement;
