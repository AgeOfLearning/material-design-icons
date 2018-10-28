import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSpeakerGroupElement
 * @class IconBaselineSpeakerGroupElement
 * @extends {AoflElement}
 */
class IconBaselineSpeakerGroupElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSpeakerGroupElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-speaker-group';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSpeakerGroupElement.is, IconBaselineSpeakerGroupElement);

export default IconBaselineSpeakerGroupElement;
