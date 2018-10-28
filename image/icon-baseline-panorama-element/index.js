import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePanoramaElement
 * @class IconBaselinePanoramaElement
 * @extends {AoflElement}
 */
class IconBaselinePanoramaElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePanoramaElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-panorama';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePanoramaElement.is, IconBaselinePanoramaElement);

export default IconBaselinePanoramaElement;
