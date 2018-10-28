import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePanoramaVerticalElement
 * @class IconBaselinePanoramaVerticalElement
 * @extends {AoflElement}
 */
class IconBaselinePanoramaVerticalElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePanoramaVerticalElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-panorama-vertical';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePanoramaVerticalElement.is, IconBaselinePanoramaVerticalElement);

export default IconBaselinePanoramaVerticalElement;
