import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePermCameraMicElement
 * @class IconBaselinePermCameraMicElement
 * @extends {AoflElement}
 */
class IconBaselinePermCameraMicElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePermCameraMicElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-perm-camera-mic';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePermCameraMicElement.is, IconBaselinePermCameraMicElement);

export default IconBaselinePermCameraMicElement;
